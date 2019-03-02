import cv2
import io
import os
from threading import Thread
import time, datetime
import ftplib

from google.cloud import vision
client = vision.ImageAnnotatorClient()

cv2.namedWindow("preview")
vc = cv2.VideoCapture(0)

apiExec = time.time() * 1000
fileExec = apiExec

class Data_Point:
	def __init__(self, timeStamp, anger, joy, suprise, sorrow):
		self.timeStamp = timeStamp
		self.anger = anger
		self.joy = joy
		self.suprise = suprise
		self.sorrow = sorrow
	
global_Anger = 0
global_Joy = 0
global_suprise = 0
global_sorrow = 0
global_faceCount = 0

def google_API(jpegFile):
	global global_Anger, global_Joy, global_suprise, global_sorrow, global_faceCount
	image = vision.types.Image(content=jpegFile)
	response = client.face_detection(image=image)
	faces = response.face_annotations
	
	facesCount = len(faces)
	joy = 0
	anger = 0
	suprise = 0
	sorrow = 0
	for face in faces:
		anger = anger + face.anger_likelihood - 1
		joy = joy + face.joy_likelihood - 1
		suprise = suprise + face.surprise_likelihood - 1
		sorrow = sorrow + face.sorrow_likelihood - 1
	print('Count: {}, Anger: {}, Joy: {}, Surprise: {}, Sorrow: {}'.format(facesCount, anger, joy, suprise, sorrow))
	
	if (facesCount != 0):
		global_Anger = global_Anger + anger
		global_Joy = global_Joy + joy
		global_suprise = global_suprise + suprise
		global_sorrow = global_sorrow + sorrow
		global_faceCount = global_faceCount + facesCount
	return 0

dataBase = []

def file_Exec():
	global dataBase, global_Anger, global_Joy, global_suprise, global_sorrow, global_faceCount
	#Algorithm and update the database and clear and update globals
	dataBase.append(Data_Point(datetime.datetime.now().strftime("%M:%S"), global_Anger/global_faceCount, \
		global_Joy/global_faceCount, global_suprise/global_faceCount, global_sorrow/global_faceCount))
		
	global_Anger = 0
	global_Joy = 0
	global_suprise = 0
	global_sorrow = 0
	global_faceCount = 0
	#Write database to file
	filename = 'output.txt'
	file = open(filename,'w')
	a = 1
	
	for object in dataBase:
		file.write(object.timeStamp)
		file.write(" ")
		file.write(str(object.joy))
		# file.write(" ")
		# file.write(str(object.joy))
		# file.write(" ")
		# file.write(str(object.joy))
		# file.write(" ")
		# file.write(str(object.joy))
		if(length(dataBase) != a):
			file.write("\n")
			
		a = a + 1
	
	file.close()
	
	#do FTP Transfer
	ftp = ftplib.FTP("xo6.x10hosting.com")
	ftp.login("yuchenx1","1996918syc")
	ftp.cwd("/public_html/2019steel")
	myfile = open(filename, 'rb')
	ftp.storbinary('STOR ' + filename, myfile)
	myfile.close()
	
	print('printed')
	
	
if vc.isOpened():
	rval, frame = vc.read()
else:
	rval = False


	
while rval:
	cv2.imshow("preview", frame)
	rval, frame = vc.read()
	
	jpg = cv2.imencode('.jpg',frame)[1].tostring()
	
	if((time.time() * 1000) - apiExec > 100): #runs every 100 ms
		t = Thread(target=google_API, args=(jpg,))
		t.start()
		apiExec = time.time() * 1000
	
	if((time.time() * 1000) - fileExec > 5000): #runs every 5000 ms
		t1 = Thread(target=file_Exec)
		t1.start()
		fileExec = time.time() * 1000
	
	key = cv2.waitKey(20)
	if key == 27:
		cv2.imwrite("imagetaken.jpg", frame)
		break
cv2.destroyWindow("preview")
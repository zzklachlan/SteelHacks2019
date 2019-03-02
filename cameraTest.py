import cv2
import io
import os
from threading import Thread

from google.cloud import vision
client = vision.ImageAnnotatorClient()

cv2.namedWindow("preview")
vc = cv2.VideoCapture(0)


def google_API(jpegFile):
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
	return 0


if vc.isOpened():
	rval, frame = vc.read()
else:
	rval = False
	

	
while rval:
	cv2.imshow("preview", frame)
	rval, frame = vc.read()
	
	jpg = cv2.imencode('.jpg',frame)[1].tostring()
	
	
	t = Thread(target=google_API, args=(jpg,))
	t.start()
	
	
	key = cv2.waitKey(20)
	if key == 27:
		cv2.imwrite("imagetaken.jpg", frame)
		break
cv2.destroyWindow("preview")
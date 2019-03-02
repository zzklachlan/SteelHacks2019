import cv2
import io
import os

from google.cloud import vision
client = vision.ImageAnnotatorClient()

cv2.namedWindow("preview")
vc = cv2.VideoCapture(0)

facesCount = 0
anger = 0
joy = 0
suprise = 0


if vc.isOpened():
	rval, frame = vc.read()
else:
	rval = False
	
while rval:
	cv2.imshow("preview", frame)
	rval, frame = vc.read()
	
	cv2.imwrite("imagetaken.jpg", frame)
	path = os.path.join(os.path.dirname(__file__),'imagetaken.jpg')
	with io.open(path, 'rb') as image_file:
		content = image_file.read()
	image = vision.types.Image(content=content)
	response = client.face_detection(image=image)
	faces = response.face_annotations
	for face in faces:
		facesCount = facesCount + 1
		anger = anger + face.anger_likelihood - 1
		joy = joy + face.joy_likelihood - 1
		suprise = suprise + face.surprise_likelihood - 1
		
	print('Count: {}, Anger: {}, Joy: {}, Surprise: {}'.format(facesCount, anger, joy, suprise))
	key = cv2.waitKey(20)
	if key == 27:
		cv2.imwrite("imagetaken.jpg", frame)
		break
cv2.destroyWindow("preview")
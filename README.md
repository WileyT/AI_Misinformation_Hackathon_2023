# AI_Misinformation_Hackathon_2023


This outlines our team's solution for the ["Social Media Lab's 2023 Canadian #AI Misinformation Hackathon"](https://socialmedialab.ca/events/hackathon/) event happened in February-March 2023.


## Objective
With the booming of algorithms that generates fake data, fraudulent or deceptive purposes have becoming a serious concern to our society. Hence, this project aims to detect deep fake images/videos with the aid of OpenAI API.

## Implementation
Python with the help of Tensorflow 2.10 with Keras API is used for the implementation of this project. As for the web application, <server name>, and basic html with css styling are used. 

### Classifier Model
VGG16 network is well known for its high accuracy for classifying images and therefore, we have applied it for detecting fake images that could be developed further for videos. 

We first trained and validated our proposed model, modified VGG16, with about 120k real and fake images from the readily available dataset in [kaggle](insert link).

As for testing, we have generated fake images using OpenAI's Dall-E. Below are some examples of the original, the generated and the prediction of our model.

![Original image](/assets/images/donald.png)
![Fake image](/assets/images/donald256.png)

**Result:**

### Webpage Application
Then, we created a web application for a user friendly interface of our solution. Here is the link: [deepfakedetection.info](deepfakedetection.info). A user can simply upload an image or insert a link to our website and it will tell the user whether it is fake or real. 

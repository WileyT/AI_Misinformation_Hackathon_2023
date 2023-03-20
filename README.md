# AI_Misinformation_Hackathon_2023


This outlines our team's solution for the ["Social Media Lab's 2023 Canadian #AI Misinformation Hackathon"](https://socialmedialab.ca/events/hackathon/) event happened in February-March 2023.


## Objective/Solution
The challenge we plan to address is the detection of deep fake images/videos with the aid of OpenAI API. The problem with deep fakes is with the constant evolving capabilities of algorithms that generates fake data making imitation seem flawless. When deep fakes are used for fraudulent or deceptive purposes, it poses a grave threat and becomes a serious concern to our society. Hence, this project aims to detect deep fake images/videos with machine learning models and with the aid of OpenAI API.

The proposed solution can assist in fighting against the spread of misinformation online by allowing users to submit concerning images/videos via URL link or personal files at any given time through a website. Evaluation in this instance is based on our machine learning models accuracy in predicting whether the images provided are 'Real' or 'Fake'. 

## Implementation
Python with the help of Tensorflow 2.10 with Keras API is used for the implementation of this project. As for the web application, Ubuntu server, and basic html with css styling are used. 

### Classifier Model
VGG16 network is well known for its high accuracy for classifying images and therefore, we have applied it for detecting fake images that could be developed further for videos. 

We first trained and validated our proposed model, modified VGG16, with about 12k real and fake images. Then for testing, we have generated fake images using OpenAI's Dall-E. Below are some examples of the original, the fake image (generated from Dall-E) and the prediction of our model.

 <img src="https://github.com/WileyT/AI_Misinformation_Hackathon_2023/blob/main/donald256.png" width="100" height="100">
 <img src="https://github.com/WileyT/AI_Misinformation_Hackathon_2023/blob/main/donaldrealfake.jpg" width="100" height="100">

**Result:**
"Fake Image"
  
### Webpage Application
Then, we created a web application for a user friendly interface of our solution. Here is the link: [deepfakedetection.info](http://deepfakedetection.info/). A user can simply upload an image or insert a link to our website and it will tell the user whether it is fake or real. 

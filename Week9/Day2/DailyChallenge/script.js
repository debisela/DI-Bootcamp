/*
Instructions
In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

Create a class named Video. The class should be constructed with the following parameters:
title (a string)
uploader (a string, the person who uploaded it)
time (a number, the duration of the video - in seconds)
Create a method called watch() which displays a string as follows:
“uploader parameter watched all time parameter of title parameter!”
Instantiate a new Video instance and call the watch() method.
Instantiate a second Video instance with different values.
Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
Think of the best data structure to save this information within the array.
Bonus: Loop through the array to instantiate those instances.*/

class Video{
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} minutes of ${this.title}`);
    }
}

let video1 = new Video("Movie1", "John", 120);
let video2 = new Video("Movie2", "Marc", 180);
video1.watch();
video2.watch();
let videos = [];
let movie1 = new Video("Video1", "Jacob", 120);
let movie2 = new Video("Video2", "Jenna", 80);
let movie3 = new Video("Video3", "Jack", 90);
let movie4 = new Video("Video4", "Anna", 110);
let movie5 = new Video("Video6", "Debi", 150);

videos.push(movie1, movie2, movie3, movie4, movie5);
//console.log(videos);
videos.forEach((element) => element.watch());
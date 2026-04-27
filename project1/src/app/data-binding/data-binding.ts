import { Component } from '@angular/core';

// Type
type User = {
  username: string;
  usercity: string;
};

// Interface
interface User1 {
  userage: string;
  usermarried: boolean;
}

@Component({
  selector: 'app-data-binding',
  standalone: true,
  templateUrl: './data-binding.html',
  styleUrls: ['./data-binding.css'] // plural
})
export class DataBinding {

  // Basic interpolation variable
  username: string = "shreyash";

  // Object binding
  User1: User = {
    username: 'tejeswar',
    usercity: "giddalur"
  };

  // Image binding
  imageUrl: string = 'data:image/jpeg;base64,...'; // (keep your full base64 here)

  // Property binding
  h1hiding: boolean = true;

  // Interface usage
  User2: User1 = {
    userage: "20",
    usermarried: true
  };

  // Conditional rendering
  loggedIn: boolean = false;

  //  Event binding variable
  username1: string = '';

  // Button click function
  handleFunction() {
    this.username1 = 'teja';
  }

  inputDataValue : string ='';
  inputfunction(val : Event){
    let input1 = val.target as HTMLInputElement;
    this.inputDataValue = input1.value;
  }
  
}
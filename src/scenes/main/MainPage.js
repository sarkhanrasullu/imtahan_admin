import React, { Component } from "react";
import NavbarWrapper from "../../components/UI/NavbarWrapper";
export default class MainPage extends Component {
  render() {
    return (
          <div>
             <NavbarWrapper />
              <h1 className="text-center">
                  Admin Panel
              </h1>
              <h4 class="text-center">Yuxarıdakı uyğun menunu seçib istifadəyə başlaya bilərsiniz.</h4>
          </div>
    );
  }
}

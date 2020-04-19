import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  public userInput;
  public htmlCollection;
  public state = "Hide";
  title = 'maze';
  ngOnInit() {
    this.userInput = parseInt(prompt("Please enter the board width", "10"));
  }
  ngAfterViewInit(){
    this.htmlCollection = document.getElementsByClassName("cell");
    let cells = [];
    let x =  Math.trunc(this.userInput/2);
    let playerID =  x.toString().concat(x.toString());
    console.log(playerID);
    for (var i = 0; i < this.htmlCollection.length; i++){
      var id = this.htmlCollection[i].id;
      cells.push(id);
    }
    var filtered = cells.filter(function(value, index, arr){ return value != playerID;});
    console.log(filtered);
    var cellsToSHow = cells.sort(() => Math.random() - Math.random()).slice(0, this.userInput);
    console.log()
    console.log(cellsToSHow);
    for (var i = 0; i < this.userInput; i++){
document.getElementById(cellsToSHow[i]).innerHTML = '<img style="display: block;margin: 0 auto;" width="50%;" src="https://i.pinimg.com/originals/08/d8/9b/08d89ba3c1b2579797635f4a5b44a48e.png">';
    }
    document.getElementById(playerID).innerHTML = '<img style="display: block;margin: 0 auto;" width="50%;" src="https://tr.rbxcdn.com/de2cf68e8ea7e9a5461e6f6cb98ef885/420/420/Decal/Png">';

  }
}

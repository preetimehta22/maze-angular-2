import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  public current;
  public currentX;
  public currentY;
  public marioImg = '<img style="display: block;margin: 0 auto;" width="50%;" src="https://tr.rbxcdn.com/de2cf68e8ea7e9a5461e6f6cb98ef885/420/420/Decal/Png">';
  public keypressed;
  public userInputWidth;
  public userInputHeight;
  public userInput;
  public htmlCollection;
  title = 'maze';
  ngOnInit() {
    this.userInputWidth = parseInt(prompt("Please enter the board width", "10"));
    this.userInputHeight = parseInt(prompt("Please enter the board height", "10"));
    this.userInput = Math.min(this.userInputWidth, this.userInputHeight);
  }
  ngAfterViewInit(){
    this.htmlCollection = document.getElementsByClassName("cell");
    let cells = [];
    let x =  Math.trunc(this.userInputHeight/2);
    let y = Math.trunc(this.userInputWidth/2);
    let playerID =  x.toString().concat(y.toString());
    this.currentX = x;
    this.currentY = y;
    console.log(playerID);
    for (var i = 0; i < this.htmlCollection.length; i++){
      var id = this.htmlCollection[i].id;
      cells.push(id);
    }
    var filtered = cells.filter(function(value, index, arr){ return value != playerID;});
    var cellsToSHow = filtered.sort(() => Math.random() - Math.random()).slice(0, this.userInput);
    for (var i = 0; i < this.userInput; i++){
document.getElementById(cellsToSHow[i]).innerHTML = '<img class="sprites" style="display: block;margin: 0 auto;" width="50%;" src="https://i.pinimg.com/originals/08/d8/9b/08d89ba3c1b2579797635f4a5b44a48e.png">';
    }
    document.getElementById(playerID).innerHTML = '<img style="display: block;margin: 0 auto;" width="50%;" src="https://tr.rbxcdn.com/de2cf68e8ea7e9a5461e6f6cb98ef885/420/420/Decal/Png">';

  }
  public turns = 0;
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.keypressed = event.key;
    if (this.keypressed == 'ArrowLeft'){
      if (this.currentY != 0){
        document.getElementById(this.currentX.toString().concat(this.currentY.toString())).innerHTML = '';
        this.currentY = this.currentY - 1;
        document.getElementById(this.currentX.toString().concat(this.currentY.toString())).innerHTML = this.marioImg;
        this.turns++;
      }
    }
    else if (this.keypressed == 'ArrowRight'){
      if (this.currentY < this.userInputWidth){
        document.getElementById(this.currentX.toString().concat(this.currentY.toString())).innerHTML = '';
        this.currentY = this.currentY + 1;
        document.getElementById(this.currentX.toString().concat(this.currentY.toString())).innerHTML = this.marioImg;
        this.turns++;
      }
    }
    else if (this.keypressed == 'ArrowUp'){
      if (this.currentX != 0){
        document.getElementById(this.currentX.toString().concat(this.currentY.toString())).innerHTML = '';
        this.currentX = this.currentX - 1;
        document.getElementById(this.currentX.toString().concat(this.currentY.toString())).innerHTML = this.marioImg;
        this.turns++;
      }
    }
    else if (this.keypressed == 'ArrowDown'){
      if (this.currentX < this.userInputHeight){
        document.getElementById(this.currentX.toString().concat(this.currentY.toString())).innerHTML = '';
        this.currentX = this.currentX + 1;
        document.getElementById(this.currentX.toString().concat(this.currentY.toString())).innerHTML = this.marioImg;
        this.turns++;
      }
    }
    if (document.getElementsByClassName('sprites').length == 0){
      alert('It took you '+this.turns+' turns to clear all sprites.')
    }
  }

}

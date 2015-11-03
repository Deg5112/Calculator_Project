//if it's a number run the val through this function to create an instance of number object, and post to view,
// and update model
calculator.prototype.addNum = function(value){
    var self = this;
    var length = self.arr.length;
    var curNumObject = new number(parseFloat(value));
    var concat;
    var concatAgain;
//situation only regarding if number was pressed
    switch (length){
        case 0:
            self.arr.push(curNumObject);//push object into array
            self.num1 = curNumObject.value;
            self.c(self.num1);
            break;

        case 1:     //integer              integer   concat
            self.concat = self.num1 + "" + curNumObject.value;
            self.num1 = parseFloat(self.concat);
            curNumObject.value = self.num1;
            self.arr[0] = curNumObject;
            self.c(self.num1);
            break;

        case 2:
            self.arr.push(curNumObject);//push object into array
            self.num2 = curNumObject.value;
            self.c(self.num2);
            break;
        case 3: //concat
            concat = self.num2 + "" + curNumObject.value;
            self.num1 = parseFloat(concat);
            curNumObject.value = self.num2;
            self.arr[2] = curNumObject;
            self.c(self.num2);
            break;
    }

};

//new number object
//params : value of selected number
var number = function(value){
    this.value = value;
    this.type = 'number';
};
let myTodos = {
  day: "Monday",
  meetings: 0,
  meetDone: 0,

  addMeeting: function (num) {
    this.meetings = this.meetings + num;
  },
  meetingDone: function (num) {
    this.meetDone = this.meetDone - num;
  },
  summary: function () {
    return `You have ${this.meetings + this.meetDone} meetings today!`;
  },
};

myTodos.addMeeting(4);
myTodos.addMeeting(2);
myTodos.meetingDone(5);
console.log(myTodos.summary());

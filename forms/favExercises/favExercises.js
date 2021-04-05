var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]
var combineList = coreExercises.concat(exercises)

favExercises.onshow = function() {
  selExercises.clear()
  for (i = 0; i < combineList.length; i++) {
    selExercises.addItem(combineList[i])
  }
}

btnExercise.onclick = function() {
  let txt = ''
  for (i = 0;i<selExercises.text.length;i++)
    txt = txt + selExercises.text[i] + ','
  console.log(txt)
  
  /*if (selections[0] == "situps" && selections[1] == "plank") {
    console.log(`You chose situps and planks - those are the two corse exercises`)
  } else {
    console.log(`You did not pick the two core`)
  }*/
}

btnNextTwo.onclick = function() {
  ChangeForm(mobileNav)
}
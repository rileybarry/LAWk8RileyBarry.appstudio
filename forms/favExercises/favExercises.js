var exercises = ["pullups", "pushups", "situps", "jogging", "plank", "curls"]
var coreExercises = ["situps", "plank"]
let combineList = coreExercises + exercises

favExercises.onshow = function() {
  selExercises.clear()
  for (i = 0; i < combineList.length; i++) {
    selExercises.addItem(combineList[i])
  }
}

selExercises.onclick = function() {
  selections.push(selExercises.value)
}

btnExercise.onclick = function() {
  if (selections[0] == "situps" && selections[1] == "plank") {
    console.log(`You chose situps and planks - those are the two corse exercises`)
  } else {
    console.log(`You did not pick the two core`)
  }
}

btnNextTwo.onclick = function() {
  ChangeForm(mobileNav)
}
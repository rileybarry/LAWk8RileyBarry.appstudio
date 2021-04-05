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
  let txt = []
  for (i = 0;i<selExercises.text.length;i++)
    txt.push(selExercises.text[i])
  if(txt[0] == "situps" && txt[1] == "plank") {
    console.log(`You chose situps and planks - those are the two core exercises`)
  } else {
    console.log(`You did not pick the two core exercises`)
  }
}

btnNextTwo.onclick = function() {
  ChangeForm(mobileNav)
}
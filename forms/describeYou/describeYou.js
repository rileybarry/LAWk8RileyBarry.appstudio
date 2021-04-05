
rdoTypes.onchange=function(){
  let userChoice = $("input[name=rdoTypes]:checked").prop("value")
  lblPersonality.value = `I would agree that you are a ${userChoice} person too!`
}

btnNxtpage.onclick=function(){
  ChangeForm(favExercises)
}
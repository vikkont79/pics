import { LIVES_COUNT } from "../../../const"
import { Hearts } from "../hearts/hearts"
import { Progress } from "../progress/progress"

function Header({ value, max, errorsCount}) {
    return (
      <>
      <img src="img/pics-to-words.svg" width="112" height="16" alt="Pics to words" />
      <Progress value={value} max={max} />
      <Hearts count={LIVES_COUNT} value={errorsCount} />
      </>
    )
}

export { Header }
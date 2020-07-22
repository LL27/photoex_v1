/** @jsx jsx */
import { jsx } from "theme-ui"
export default function CardText(props) {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-evenly",
        height: '120px'
              }}
    >
      {props.children}
    </div>
  )
}

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
const percentage = 67

export default function CircleProgress() {
    return (
        <>
            <div style={{ width: "30%", margin: "0 auto" }} className="circle-item">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}% `}
                    background
                    backgroundPadding={0}
                    styles={buildStyles({
                        backgroundColor: "transparent",
                        textColor: "#3498DB",
                        pathColor: "#0055FF",
                        trailColor: "#2A3E66",
                        strokeLinecap: "butt"
                    })}
                />
            </div>
        </>
    )
}


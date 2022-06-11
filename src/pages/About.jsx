//----------------------------------------------//
//template for object:
//----------------------------------------------//
// export default {
//     name: "Dev Name",
//     img: "img.jpeg", //from public folder, we can dump images there
//     github: "https://????.github.com",
//     blurb: "Here is a short bio, we need to decide what length the bio will be."
//     //perhaps add something else?
// }
//----------------------------------------------//

//Dev component
import Dev from "./components/Dev"

//us
import hieu from "./devs/hieu"
import isiah from "./devs/isiah"
import kyle from "./devs/kyle"
import rich from "./devs/rich"

//create array to iterate
let devs = [hieu, isiah, kyle, rich]

//randomize the array
let randomDevs = devs.sort(() => Math.random() - 0.5);

export default function About() {
    // then map over the randomDevs array and display <Dev/>'s
    <div className="about">
        {randomDevs.map((dev) => {
            return (
                <Dev
                //props
                />
            )
        })}
    </div>
}
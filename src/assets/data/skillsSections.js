import languages from './languages'
import tools from './tools'
import environments from './environments'
import { machineLearningFL, webDevFL, otherFL } from './framesAndLibs'

const skillsSections = [
  { title: 'Languages', items: languages },
  { title: 'AI / ML', items: machineLearningFL },
  { title: 'Web Development', items: webDevFL },
  { title: 'Other Frameworks & Libraries', items: otherFL },
  { title: 'Tools', items: tools },
  { title: 'Environments', items: environments },
]

export default skillsSections


import Hero from '../interface/Landing';

function Heading(props:Hero) {
    const{ tag} = props
    const Tag:any = tag;
  return (
    <div>
        <Tag>
            
        </Tag>
    </div>
  )
}

function Test () {
    return (
    <div>
        <Heading tag='h3'>
            Titre h3
        </Heading>       
         <Heading tag='h1'>
            Titre h1
        </Heading>
        <Heading tag="h6">
            Titre h6
        </Heading>
    </div>
        
    )
}
export default Test
function Demo(props)
{
    return <h1> {props.students.map(
        function nameIterator(element, index)
        {
            return(
                "Student " + (index+1) + ":" + element + " "
                
            )
        }
    )} </h1>
}

export default Demo
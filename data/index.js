export const getStaticPaths = async () => {
    const res = await fetch('https://work-spacee.herokuapp.com/all')
    const result = res.json()
    
    console.log(result)

    return {
        props : {result}
    }
}
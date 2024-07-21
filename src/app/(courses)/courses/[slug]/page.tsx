export default async function CoursesDetails({params}:{params:{slug:string}}) {
    const {slug}=params
    return <div><p>{slug}</p></div>
    
}
export default async function CoursesStudentDetails({params}:{params:{slug:string}}) {
    const {slug}=params
    return <div><p>{slug}</p></div>
    
}
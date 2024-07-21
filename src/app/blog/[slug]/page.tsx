export default async function BlogDetails({
  params,
}: {
  params: { slug: string };
}) {

    const {slug}=params
    return <div className="flex
     w-full h-screen justify-center items-center"><p className="text-blue-700">{slug}</p></div>
}

export default async function File({params}) {
    const {filepath} = await params;
    console.log(filepath);

    return <div>File <i>{filepath.join('/')}</i></div>
}
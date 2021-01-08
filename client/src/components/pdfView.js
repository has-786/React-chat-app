import '../css/Department_css.css'
export default function PdfView(props)
{
    return <iframe src={props.link} id="pdf" width="150%" height="500px"></iframe>;
}
import ReactMarkdown from 'react-markdown';


const style = {
  fontSize: '1.1rem',
  lineHeight: '1.3'
};

const SpeakerNotes = (props) => (
  <div style={style}>
    <ReactMarkdown source={props.source} allowDangerousHtml />
  </div>
);

export default SpeakerNotes;
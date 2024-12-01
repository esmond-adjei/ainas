
export type MessageType =
    | 'error'
    | 'success'
    | 'warning'
    | 'info';

export type AppMessageType = {
    text: string,
    type: 'error' | 'success' | 'warning' | 'info'
}
/**
 * 
 * @param param0 message { text, type }
 * @returns 
 */
export default function AppMessage(
    {text, type}: AppMessageType
) {
    switch(type) {
        case 'error':
            return <p className="error-message">{text}</p>
        case 'success':
            return <p className="success-message">{text}</p>
        case 'warning':
            return <p className="warning-message">{text}</p>
        case 'info':
            return <p className="info-message">{text}</p>
        default:
            return <p className="info-message">{text}</p>
    }
}

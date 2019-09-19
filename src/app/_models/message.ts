export interface Message {
    id: number
    senderId: number
    senderPhotoUrl: string
    senderUsername: string
    recipientId: number
    recipientUsername: string
    recipientPhotoUrl: string
    content: string
    isRead: boolean
    dateRead: Date
    messageSent: Date
}

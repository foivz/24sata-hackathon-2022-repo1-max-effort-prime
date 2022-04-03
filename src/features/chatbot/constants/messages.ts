interface Message {
  type: 'sent' | 'received';
  message: string;
}

export const messages: Message[] = [
  {
    type: 'received',
    message: 'Pozdrav! Ja sam tvoj chatbot Šparo! Klikni na ikonu su plusićom te odaberi kako ti mogu pomoći! 😉',
  },
  /*  {
    type: 'sent',
    message: 'Promjena budžeta',
  },
  {
    type: 'received',
    message: 'Tvoj trenutni budžet iznosi 200 HRK. Unesi iznos novog željenog mjesečnog budžeta.',
  },
  {
    type: 'sent',
    message: '350 HRK',
  },
  {
    type: 'received',
    message: 'Promijenjeno! Tvoj novi mjesečni budžet iznosi 350 HRK',
  }, */
];

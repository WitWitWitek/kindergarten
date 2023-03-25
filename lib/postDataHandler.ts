export const dateHandler = (date: string): string => {
    const dateToRefactor = new Date(date)
    return dateToRefactor.toLocaleDateString('pl-PL', {
        year: 'numeric',
        month: 'short',
        day: "numeric", 
        hour: "numeric",
        minute: 'numeric',
      })
}

export const excerptHandler = (excerptWp: string): string => {
  const cleanedExcerpt = excerptWp.replace(/<p>|<\/p>/g, '').replace(/&nbsp;/g, ' ');
  return cleanedExcerpt.substring(0, 200) + '...';
}
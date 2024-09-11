

const FormatDate = (date) => {
    const Hours=new Date(date).getHours();
    const minutes=new Date(date).getMinutes();

    return `${Hours < 10 ? '0'+ Hours : Hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

export default FormatDate;

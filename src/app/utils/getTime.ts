export const getTime = (dateString: string) => {
    const now = new Date();
    const postTime = new Date(dateString);

    const diff = now.getTime() - postTime.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (seconds < 60) return `${seconds}s`;

    if (minutes < 60) return `${minutes}m`;

    if (hours < 24) return `${hours}h`;

    if (days === 1) return "Yesterday";

    if (days < 7) return `${days}d`;

    return postTime.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short"
    });
};
export const getTime = (dateString: string) => {
    const now = new Date();
    const postTime = new Date(dateString);

    const diff = now.getTime() - postTime.getTime();

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (seconds < 10) return "Just now";
    if (seconds < 60) return `${seconds} seconds ago`;

    if (minutes < 60) return `${minutes} minutes ago`;

    if (hours < 24) return `${hours} hours ago`;

    if (days === 1) return "Yesterday";

    if (days < 7) return `${days} days ago`;

    return postTime.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short"
    });
};
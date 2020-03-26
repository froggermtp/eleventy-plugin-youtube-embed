const spotPattern = /<p>(\s*)(<a(.*)>)?(\s*)(https?:\/\/)?(w{3}\.)?(youtube\.com|youtu\.be)\/(watch\?v=|embed\/)?([A-Za-z0-9-_]{11})(\S*)(\s*)(<\/a>)?(\s*)<\/p>/g;
const extractId = /<p>(?:\s*)(?:<a(?:.*)>)?(?:\s*)(?:https?:\/\/)?(?:w{3}\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([A-Za-z0-9-_]{11})(?:\S*)(?:\s*)(?:<\/a>)?(?:\s*)<\/p>/;

module.exports = { spotPattern, extractId }


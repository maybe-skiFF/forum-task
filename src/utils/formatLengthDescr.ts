function formatLengthDescr(name: string) {
  return name.length > 40 ? `${name.slice(0, 40)}...` : name;
}

export { formatLengthDescr };

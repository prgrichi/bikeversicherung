export function getManufacturers() {
  return $fetch('/api/bike-manufacturers');
}

export function getModels(manufacturerId) {
  return $fetch('/api/bike-models', {
    query: { manufacturerId },
  });
}

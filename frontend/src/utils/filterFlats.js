export const filterFlats = (flats, filters) => {
  const today = new Date();
  const availabilityRanges = {
    Immediate: {
      startDate: today,
      endDate: new Date(today.getTime() + 86400000), // Available from today to the next day (86400000 milliseconds = 1 day)
    },
    "Within 15 Days": {
      startDate: today,
      endDate: new Date(today.getTime() + 15 * 86400000), // Available from today to 15 days from today
    },
    "Within 30 Days": {
      startDate: today,
      endDate: new Date(today.getTime() + 30 * 86400000), // Available from today to 30 days from today
    },
    "After 30 Days": {
      startDate: new Date(today.getTime() + 31 * 86400000), // Available more than 30 days from today
    },
  };

  return flats.filter((flat) => {
    // Filter by city
    if (filters.city && flat.city !== filters.city) {
      return false;
    }

    // Filter by rent range
    if (filters.rentRange && flat.flatRent > filters.rentRange) {
      return false;
    }
    // Filter by availability
    if (filters.availability) {
      const availabilityRange = availabilityRanges[filters.availability];
      if (!availabilityRange) {
        // Invalid availability option
        return false;
      }

      // Check if flat's availableFrom date falls within the availability range
      const availableFrom = new Date(flat.availableFrom);
      if (
        availabilityRange.startDate &&
        availableFrom < availabilityRange.startDate
      ) {
        return false;
      }
      if (
        availabilityRange.endDate &&
        availableFrom > availabilityRange.endDate
      ) {
        return false;
      }
    }

    // Filter by BHK type
    const selectedBHKTypes = Object.keys(filters.bhk).filter(
      (bhk) => filters.bhk[bhk]
    );
    if (
      selectedBHKTypes.length > 0 &&
      !selectedBHKTypes.includes(flat.flatType)
    ) {
      return false;
    }

    // Filter by preferred tenants
    if (
      Object.keys(filters.tenants).some(
        (tenant) => filters.tenants[tenant] && flat.preference !== tenant
      )
    ) {
      return false;
    }

    // Filter by furnishing
    if (
      Object.keys(filters.furnishing).some(
        (furnishing) =>
          filters.furnishing[furnishing] &&
          flat.furnishing !== furnishing.toLowerCase()
      )
    ) {
      return false;
    }

    return true;
  });
};

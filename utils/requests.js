const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
  try {
    // Handle The Case Where Domain Is Not Available
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Failed To Fetch");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Fetch Single Property
async function fetchProperty(id) {
  try {
    // Handle The Case Where Domain Is Not Available
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties.${id}`);
    if (!res.ok) {
      throw new Error("Failed To Fetch");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };

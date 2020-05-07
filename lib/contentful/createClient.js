const contentful = require("contentful")
export default ({ isPreview = false }) => {
  return contentful.createClient({
    space: "f72wl6s8ag70",
    accessToken: (
      isPreview
        ? 'OEf6G1UinTiaZtVZacdrn7VErRfuKm_b9oPq3YqV6DY'
        : 'rtxyFpqGveq3S-XyTrbAzjWSr4S2_0wVSH1Mk7LJmfc'
    ),
    host: (
      isPreview
        ? 'preview.contentful.com'
        : 'cdn.contentful.com'
    )
  })
}

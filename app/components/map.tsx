export default function MapWidget() {
  return(
    <div className="w-[150px] h-[150px] overflow-hidden">
      <div dangerouslySetInnerHTML={{ __html: `<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=-_gm9K-f8plVX1OmN0lTV4ThEUoIDrAD_e0ExZsZ1a4"></script>`}} />
    </div>
  )
}
import React from 'react';

const MapEmbed: React.FC<{ latitude: number; longitude: number; }> = ({ latitude, longitude }) => {
  const src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3374.0895002432835!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4731b19647037181%3A0x88d94b97441f9093!2z0LLRg9C70LjRhtGPINCi0LDRgNCw0YHQsCDQqNC10LLRh9C10L3QutCwLCA4LCDQotC10YDQtdCx0L7QstC70Y8sINCi0LXRgNC90L7Qv9GW0LvRjNGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA0ODEwMA!5e0!3m2!1suk!2sua!4v1725976831414!5m2!1suk!2sua`;

  return (
    <div className="map-container">
      <iframe
        src={src}
        className="map-iframe"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;

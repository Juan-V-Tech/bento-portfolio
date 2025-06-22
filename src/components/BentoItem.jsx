import React from 'react';

const BentoItem = ({
  title,
  description,
  children,
  link,
  image,
  imgalt,
  imgstyle,
  size = '1fr',
  onClick,
  style = {},
  ...rest
}) => {
  const internalStyle = {
    background: 'linear-gradient(145deg, rgba(44,44,44,0.7), rgba(30,30,30,0.7))', 
    borderRadius: '12px',
    padding: '1.2rem',
    minWidth: '200px',
    height: '140px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s ease-in-out',
    color: 'white',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    outline: '2px solid #59B2D1',
    outlineOffset: '-2px',
    cursor: onClick ? 'pointer' : undefined,
    backdropFilter: 'blur(3px)',
    overflow: 'hidden',
    ...style,
  };

  const textContainerStyle = {
    flex: 1,
    marginRight: image ? '1rem' : 0,
    minWidth: 0,
    overflow: 'hidden',
    width: '100%', 
  };

  const titleStyle = {
    margin: '0 0 0.5rem 0',
    fontSize: '1.1rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  };

  const descriptionStyle = {
    margin: 0,
    fontSize: '0.95rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  };

  const imageContainerStyle = {
    flexShrink: 0, 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '30%', 
  };

  const defaultImgStyle = {
    maxWidth: '100%',
    maxHeight: '100px',
    objectFit: 'contain',
    ...imgstyle,
  };

  const content = (
    <div
      style={internalStyle}
      onClick={onClick}
      {...rest}
    >
      <div style={textContainerStyle}>
        <h3 style={titleStyle} title={title}>{title}</h3>
        <p style={descriptionStyle} title={description}>{description}</p>
        {children}
      </div>
      {image && (
        <div style={imageContainerStyle}>
          <img
            src={image}
            alt={imgalt || ""}
            style={defaultImgStyle}
          />
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'inline-block', width: '100%' }}
        onMouseEnter={e => (e.currentTarget.firstChild.style.transform = 'scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        {content}
      </a>
    );
  }

  if (title) {
    return ( 
      <a  
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none', display: 'inline-block', width: '100%' }}
        onMouseEnter={e => (e.currentTarget.firstChild.style.transform = 'scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.firstChild.style.transform = 'scale(1)')}
      >
        {content}
      </a>
    )
  }

  return content;
};

export default BentoItem;

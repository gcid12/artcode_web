import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { Spring } from 'react-spring/renderprops'
import { FaHeart, FaArrowLeft} from 'react-icons/fa';
import { Link } from "react-router-dom";

import './styles.css'

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const styles = {
  container: {
    width: '120px',
    height: '120px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    willChange: 'background',
    // borderWidth:'1px',
    // borderStyle:'solid',
    // borderColor:'blue'
  },
  shape: { width: '100%', height: 'auto', willChange: 'transform' },
}


const content = {
  portfolio:{
    first:'gerarDo',
    last:'ciD',
    footerA:'A San Francisco ',
    footerB:' based developer ',
    contact:'contact: hello@artcode.dev'
  },
  studio:{
    first:'Art',
    last:'coDe',
    footerA:'A San Francisco ',
    footerB:' based company ',
    contact:'contact: hello@artcode.dev'
  }
  
};
const info = content.portfolio;



class Work extends React.Component {
  constructor() {
    super()
    this.state = {
      toggles: {
        t1: true,
        t2: true,
        t3: true,
        t4: true,
        t5: true,
        t6: true,
        t7: true,
        t8: true,
        t9: true,
        t10: true,
        t11: true,
        t12: true,
        t13: true,
        t14: true,
        t15: true,
        t16: true,
        t17: true,
        t18: true,
        t19: true,
        t20: true,
        t21: true,
        t22: true,
      },
      info: {
        t1: {
          title: 'IPsoft Brand Realignment',
          description: '',
          color: '#111111',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/ipbrand/IPbrand.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/ipbrand/IPbrand2.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/ipbrand/IPbrand3.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/ipbrand/IPbrand4.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/ipbrand/IPbrand5.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/ipbrand/IPbrand6.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/ipbrand/IPbrand7.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/ipbrand/IPbrand8.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/ipbrand/IPbrand9.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/ipbrand/IPbrand10.jpg',
              offset: '0',
              color: '#000',
            },
            
          ],
          cta: '',
          ctaUrl: '',
        },
        t2: {
          title: 'Amelia Brain v0.1',
          description: '',
          color: '#FFFFFF',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/darkbrain/01.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/darkbrain/02.jpg',
              offset: '1',
              color: '#000',
            },
            {
              loc: '/images/portfolio/darkbrain/03.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/darkbrain/04.jpg',
              offset: '3',
              color: '#000',
            },
            {
              loc: '/images/portfolio/darkbrain/05.jpg',
              offset: '4',
              color: '#000',
            },
            {
              loc: '/images/portfolio/darkbrain/brainmix.jpg',
              offset: '8',
              color: '#000',
            },
          ],
          cta: '',
          ctaUrl: '',
        },
        t3: {
          title: 'Hexa Color Store',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/hexa/hexa_1.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t4: {
          title: 'To the Bone',
          description:'',
          color: '#CCC',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/tdb_02.jpg',
              color: '#000000',
            },
            {
              loc: '/images/portfolio/tdb_01.jpg',
              color: '#000000',
            },
            {
              loc: '/images/portfolio/tdb_03.jpg',
              color: '#000000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t5: {
          title: 'Rethinking Chat Interfaces',
          description:'',
          color: '#FFF',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/lightbrain/b0.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/lightbrain/b3.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/lightbrain/b2.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/lightbrain/b5.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/lightbrain/b4.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/lightbrain/b6.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/lightbrain/b8.jpg',
              offset: '2',
              color: '#000',
            },
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t6: {
          title: 'Omakase Timeline',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/omakase/omakase.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/omakase/omakase3.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/omakase/omakase4.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t7: {
          title: 'Amelia UX',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/ameMix.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t8: {
          title: '3D Brain',
          description:'',
          color: '#CCC',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/brain3d.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t9: {
          title: 'Goethe Institute',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/goethe/go1.jpg',
              offset: '2',
              color: '#000000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t10: {
          title: 'IP Widget System',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/widgetSystem.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t11: {
          title: 'World Metro Map',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/metro/wmm_detail.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/metro/homepage_lower_image.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/metro/homepage_hero_image.jpg',
              offset: '0',
              color: '#000',
            },
            {
              loc: '/images/portfolio/metro/map5_1024x1024.gif',
              offset: '1',
              color: '#000',
            },
            {
              loc: '/images/portfolio/metro/sizeB_1024x1024.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/metro/wmm_detail04_1024x1024.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/metro/countries_1024x1024.jpg',
              offset: '2',
              color: '#000',
            },
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t12: {
          title: 'Pixels By Me',
          description:'',
          color: '#FFFFFF',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/pbm/pbm01.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/pbm/pbm02.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/pbm/pbm03.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/pbm/pbm04.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/pbm/pbm05.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t13: {
          title: 'Illustration Various',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/tutum/tutum1.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t14: {
          title: 'Retro Slides',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/diapos/d2.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/diapos/d3.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/diapos/d4.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/diapos/d5.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/diapos/d1.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t15: {
          title: 'InfraRed Fashion',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/infra/IRF01.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/infra/IRF02.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/infra/IRF03.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t16: {
          title: 'Coca-Cola 3Rs Mascots',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/coca/mascots.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t17: {
          title: 'The Promise (Art Direction)',
          description:'',
          color: '#CCCCCC',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/promise/D_04.jpg',
              offset: '2',
            },
            {
              loc: '/images/portfolio/promise/A_01.jpg',
              offset: '2',
            },
            {
              loc: '/images/portfolio/promise/blueprint.jpg',
              offset: '2',
            },
            {
              loc: '/images/portfolio/promise/C_05.jpg',
              offset: '2',
            },
            {
              loc: '/images/portfolio/promise/C_06.jpg',
              offset: '2',
            },
            {
              loc: '/images/portfolio/promise/C_07.jpg',
              offset: '2',
            },
            {
              loc: '/images/portfolio/promise/E_02.jpg',
              offset: '2',
            },
            {
              loc: '/images/portfolio/promise/E_03.jpg',
              offset: '2',
            },
            {
              loc: '/images/portfolio/promise/E_06.jpg',
              offset: '2',
            },
          ],
          ctaUrl: '/',
        },
        t18: {
          title: 'Safe For Web',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/safe/sfw01.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/safe/sfw02.jpg',
              offset: '2',
              color: '#000',
            },
            {
              loc: '/images/portfolio/safe/safefor.jpg',
              offset: '2',
              color: '#000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        },
        t19: {
          title: '1Desk UX',
          description:'',
          color: '#000000',
          thumb: '',
          images: [
            {
              loc: '/images/portfolio/1desk/1desk_mix.jpg',
              offset: '2',
              color: '#000000',
            }
          ],
          cta: 'Visit me',
          ctaUrl: '/',
        }
      },
      modal: false,
      modalId: '',
    }
  }
  
  handleToggle = field => event => {
    const { toggles } = this.state
    console.log(field)
    // Toggle Shape Triangle - Rectangle
    toggles[`${field}`] = !toggles[`${field}`]
    
    this.setState({ toggles, modal: !this.state.modal, modalId: field })
    
    this.handleToggleMinimize(field)
  }
  
  handleToggleMinimize(field) {
    // field brings the only Thumbnail that cannot be touched
    const { toggles } = this.state
    
    // FIELD IS BRINGING THE ACTIVE FIELD
    
    function grow(id) {
      if (id !== field) {
        if (toggles[id] === 333 || toggles[id] === false) {
          toggles[id] = true
        } else {
          toggles[id] = 333
        }
      }
    }
    
    grow('t1')
    grow('t2')
    grow('t3')
    grow('t4')
    grow('t5')
    grow('t6')
    grow('t7')
    grow('t8')
    grow('t9')
    grow('t10')
    grow('t11')
    grow('t12')
    grow('t13')
    grow('t14')
    grow('t15')
    grow('t16')
    grow('t17')
    grow('t18')
    grow('t19')
    grow('t20')
    grow('t21')
    
    this.setState({ toggles })
  }
  
  renderTriangle(thumbId, thumb, color1, locX, locY) {
    const toggleStatus = this.state.toggles[thumbId]
    
    let toggle = false
    let triangleScale = 0.9
    
    if (toggleStatus === 333) {
      toggle = false
      triangleScale = 0
    }
    if (toggleStatus) {
      toggle = true
    }
    
    return (
      <Spring
        from={{ color: 'black' }}
        to={{
          coords: toggle ? [0, 0] : [35, 0],
          color: toggle ? 'rgba(0,0,0,0.01)' : 'rgba(0,0,0,0.3)',
          start: toggle ? '#000' : '#CCC',
          end: toggle ? '#111' : '#CCC',
          scale: toggle ? triangleScale : 15,
          shape: toggle ? TRIANGLE : TRIANGLE,
          stop: toggle ? '0%' : '50%',
          rotation: toggle ? '0deg' : '-180deg',
          zindex: toggle ? '0' : '10',
          imageOpacity: toggle ? '0' : '1',
          imageVisibility: toggle ? 'hidden' : 'visible',
          imageDisplay: toggle ? 'none' : 'block',
          thumbOpacity: toggle ? '1' : '0',
        }}
      >
        {({
            color,
            scale,
            shape,
            start,
            end,
            stop,
            rotation,
            coords,
            zindex,
            imageDisplay,
            imageOpacity,
            imageVisibility,
            thumbOpacity,
            ...rest
          }) => (
          // The main Triangle container
          <div
            style={{
              ...styles.container,
              background: `transparent`,
              position: `absolute`,
              marginLeft: locX,
              marginTop: locY,
              ...rest,
            }}
          >
            {/* {thumbId} */}
            <svg
              style={{
                ...styles.shape,
                zIndex: `${zindex}`,
                visibility: `initial !important`,
                transformOrigin: `50% 50%`,
                transform: `scale3d(${scale}, ${scale}, ${scale}) rotate(${rotation})
                  translate3d(${coords[0] + -8}px,${coords[1] + -28}px,0)`,
              }}
              version="1.1"
              viewBox="0 0 400 400"
            >
              <g
                style={{
                  cursor: 'pointer',
                }}
                fill={color}
                fillRule="evenodd"
                onClick={this.handleToggle(thumbId)}
              >
                <path id="path-1" d={shape} />
                
                <image
                  id="gem"
                  type="MSBitmapLayer"
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  // href="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg"
                  href={thumb}
                  style={{
                    opacity: `${thumbOpacity}`,
                    transition: `opacity 0ms ease-in 0ms`
                  }}
                />
              </g>
            </svg>
          </div>
        )}
      </Spring>
    )
  }
  
  renderModal(id) {
    let current = { title: '', description: '', images: [], cta: '', ctaUrl: '' }
    
    if (id) {
      current = this.state.info[id]
    }
    console.log(current)
    
    //const layerNumber = 0
    
    return (
      <div className={`ac_modal_screen ${this.state.modal ? `active` : ``}`} onClick={this.handleToggle()}>
        <div className="ac_view_wrapper">
          <div className="ac_top_logo modal" style={{ marginRight: '12px', color: current.color }}>
            <h2 className="fatface">
              {info.first}<span style={{opacity:'0.5'}}>+</span>{info.last}
            </h2>
            <div style={{ fontSize: '12px', marginLeft: '30px', opacity: '01.7' }}>/ Work / <strong>{current.title} </strong></div>
          
          </div>
          
          {/*<div className="ac_view_top_left">*/}
            {/*<h2> {current.title}</h2>*/}
          {/*</div>*/}
          <div className="ac_view_top_right" style={{ color:'#CCC' }}>Close</div>
          <div className="ac_view_bottom_left">
            <p>{current.description}</p>
          </div>
          {/*<div className="ac_view_bottom_right">*/}
            {/*<a href={current.ctaUrl}>*/}
              {/*<h3>{current.cta}</h3>*/}
            {/*</a>*/}
          {/*</div>*/}
  
          <div style={{ width:'100%', height:'100%', overflowY:'scroll' }}>
            {current.images.map(function(item, i) {
              return (
                <img
                  src={item.loc}
                  style={{ width:'100%', height:'auto', marginTop:'-4px'}}
                />
              )
            })}
          </div>
          
          
          {/*<div className="ac_view_scroller">*/}
            {/*<Parallax*/}
              {/*ref={ref => (this.parallax = ref)}*/}
              {/*pages={3}*/}
              {/*onScroll={e => console.log(e)}*/}
              {/*horizontal={false}*/}
              {/*style={{ top: '0' }}*/}
            {/*>*/}
              {/*{current.images.map(function(item, i) {*/}
                {/*return (*/}
                  {/*<ParallaxLayer*/}
                    {/*offset={item.offset}*/}
                    {/*//speed={-0.05}*/}
                    {/*className="ac_view_image"*/}
                    {/*style={{ backgroundColor: item.color, backgroundImage: `url(${item.loc})` }}*/}
                  {/*/>*/}
                {/*)*/}
              {/*})}*/}
            {/*</Parallax>*/}
          {/*</div>*/}
        </div>
      </div>
    )
  }
  
  renderScroll() {
    // Little helpers ...
    const url = (name, wrap = false) => `${wrap ? 'url(' : ''}/images/${name}.svg${wrap ? ')' : ''}`
    
    const currentModal = this.state.modalId
    
    return (
      <div className="scroll-container" ref={this.scrollContainer}>
        {this.renderModal(currentModal)}
        
        <div className="ac_top_logo" style={{ color: '#111' }}>
          <h2 className="fatface">
            {info.first}<span style={{opacity:'0.5'}}>+</span>{info.last}
          </h2>
        </div>
  
        <div className="ac_top_menu">
          <Link to={'/'}>
            <div className="menu_item gen fatface"><FaArrowLeft/> home </div>
          </Link>
        </div>
        
        <div className="ac_bottom_logo" style={{display:'flex', justifyContent:'space-between', width:'90%'}}>
          {/*<div style={{color:'#CCC'}}>Contact:</div>*/}
          
          <div>{info.footerA} <FaHeart /> {info.footerB} </div>
  
          <div>{info.contact} </div>
          
        </div>
        
        <Parallax ref={ref => (this.parallax = ref)} pages={2} onScroll={e => console.log(e)}>
          {/* BACKGROUNDS  ////////////////////// */}
          
          <ParallaxLayer offset={-0.6} speed={0.1} style={{ position: 'fixed', left: '-70px' }}>
            <img src={url('t_big_gray')} style={{ width: '100%' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={0.6} speed={0.4} style={{ position: 'fixed', right: '-100px' }}>
            <img src={url('t_big_gray')} style={{ width: '100%', transform: 'rotate(180deg)' }} alt="" />
          </ParallaxLayer>
          
          {/*DESIGN BG*/}
          <ParallaxLayer offset={1.7} style={{ position: 'fixed', left: '-170px' }}>
            <img src={url('t_full_green')} style={{ width: '100%',transform: 'rotate(90deg)' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={3.5} speed={0.4} style={{ position: 'fixed', right: '-100px' }}>
            <img src={url('t_big_gray')} style={{ width: '100%', transform: 'rotate(180deg)' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={4} speed={1} style={{ position: 'fixed', left: '-70px' }}>
            <img src={url('t_big_gray')} style={{ width: '100%' }} alt="" />
          </ParallaxLayer>
  
          
          
          {/*     LAYER 1 ///////////////////////// */}
  
  
          <ParallaxLayer offset={0.35} className="ac_hide_mobile" speed={0.2} style={{ width: '150px', height: '150px', marginLeft: '10%', zIndex:'100' }}>
  
            {/* 1ST ROW */}
            {this.renderTriangle('t18', '/images/thumb_safe.png','#FFF', 174+209, -90)}
            {this.renderTriangle('t10', '/images/thumb_amelia.png','#FFF', 174, -90)}
  
  
            {/* 2ND ROW */}
            {this.renderTriangle('t12', '/images/thumb_pbm.png','#FFF', 225+313, 0)}
            {this.renderTriangle('t2', '/images/thumb_darkbrain.png','#FFF', 225, 0)}
            {this.renderTriangle('t16', '/images/thumb_mascot.png','#FFF', 18+310, 180-180)}
            {this.renderTriangle('t11', '/images/thumb_metro.png','#FFF', 123+310, 0)}
            {this.renderTriangle('t13', '/images/thumb_tutum.png','#FFF', 70+310, 90)}
            
          </ParallaxLayer>
          
          
          
          <ParallaxLayer offset={0.35} className="ac_hide_mobile" speed={0.3} style={{ width: '150px', height: '150px', marginLeft: '10%', zIndex:'100' }}>
  
            {this.renderTriangle('t1', '/images/thumb_realign.png','#FFF', 123, 0)}
  
            {this.renderTriangle('t3', '/images/thumb_hexa.png','#FFF', 70, 90)}
            {this.renderTriangle('t4', '/images/thumb_tdb1.png','#FFF', 175, 90)}
            {this.renderTriangle('t5', '/images/thumb_lightbrain.png','#FFF', 275, 90)}
            {this.renderTriangle('t6', '/images/thumb_omakase.png','#FFF', 18, 180)}
  
            {this.renderTriangle('t7', '/images/thumb_ameliaMix.png','#FFF', 122, 180)}
  
            
            
            
          </ParallaxLayer>
  
          <ParallaxLayer offset={0.35} className="ac_hide_mobile" speed={0.1} style={{ width: '150px', height: '150px', marginLeft: '10%', zIndex:'100' }}>
  
            {this.renderTriangle('t8', '/images/thumb_3dbrain.png','#FFF', 224, 180)}
            {this.renderTriangle('t9','/images/thumb_go.png', '#FFF', 327, 180)}
            {this.renderTriangle('t14', '/images/thumb_diapos.png','#FFF', 175+310, 90)}
            {/*{this.renderTriangle('t15', '/images/thumb_diapos.png','#FFF', 275+315, 90)}*/}
  
            {this.renderTriangle('t17', '/images/thumb_promesa.png','#FFF', 224+314, 180)}
            {this.renderTriangle('t19', '/images/thumb_1desk.png','#FFF', 174+205, 270)}
          </ParallaxLayer>
  
  
  
          <ParallaxLayer offset={0.7} speed={-0.12} style={{ opacity: 1 }}>
            <img src={url('t_out_red')} style={{ display: 'block', width: '5%', marginTop:'-19px', marginLeft: '17%',transform: 'rotate(180deg)'  }} alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.7} speed={-0.15} style={{ opacity: 1 }}>
            <img src={url('t_out_orange')} style={{ display: 'block', width: '5%', marginTop:'-19px', marginLeft: '17%',transform: 'rotate(180deg)'  }} alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.7} speed={-0.10} style={{ opacity: 1 }}>
            <img src={url('t_out_green')} style={{ display: 'block', width: '5%', marginTop:'-19px', marginLeft: '17%',transform: 'rotate(180deg)'  }} alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.7} speed={-0.10} style={{ opacity: 1 }}>
            <a onClick={() => this.parallax.scrollTo(1)}>
              <img src={url('t_big_gray')} style={{ opacity:'0.1', display: 'block', width: '5%', marginTop:'-19px', marginLeft: '17%',transform: 'rotate(180deg)'  }} alt="" />
            </a>
          </ParallaxLayer>
          
          
          {/*<ParallaxLayer offset={0} speed={0.8} style={{ opacity: 0.5 }}>*/}
            {/*<img src={url('t_out_green')} className="ac_shadow_triangle" style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="" />*/}
            {/*<img src={url('t_out_blue')} className="ac_shadow_triangle" style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="" />*/}
          {/*</ParallaxLayer>*/}
          
          <ParallaxLayer offset={0.2} speed={0.5} style={{ opacity: 0.7 }}>
            <img src={url('t_out_green')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="" />
            <img src={url('t_out_green')} style={{ display: 'block', width: '15%', marginLeft: '50%', transform: 'rotate(180deg)' }} alt="" />
          </ParallaxLayer>
          
         
          <ParallaxLayer className="ac_hide_mobile" offset={0.32} speed={-0.2}>
            <h1 className="" style={{ marginLeft: '15%', color:'#CCC', fontSize:'30px' }}>.+**+.</h1>
          </ParallaxLayer>
          
          <ParallaxLayer offset={0.2} speed={-0.1}>
            <h1 className="ac_title ac_font_des" style={{ marginLeft: '10%', color:'#CCC' }}>woRk</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={0.18} speed={-0.2}>
            <h1 className="ac_title ac_font_des" style={{ marginLeft: '10%', color:'#CCC', fontSize:'2.5em' }}>some</h1>
          </ParallaxLayer>
          
          
          
          
          {/*LAYER 2 ///////////////////////////////////*/}
          
          <ParallaxLayer
            offset={1.4}
            speed={0.3}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', justifyContent: 'center', opacity:'0.5' }}
          >
            <h3>Every great design begins with an even better story." </h3>
         
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={1.5}
            speed={0.3}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', justifyContent: 'center', opacity:'0.5' }}
          >
            <p>- Lorinda Mamo</p>
          </ParallaxLayer>
          
        
        </Parallax>
        
      
      </div>
    )
  }
  
  render() {
    return this.renderScroll()
  }
}

export default Work


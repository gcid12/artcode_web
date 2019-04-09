import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { Spring } from 'react-spring/renderprops'

import './styles.css'

const TRIANGLE = 'M20,380 L380,380 L380,380 L200,20 L20,380 Z'
const RECTANGLE = 'M20,20 L20,380 L380,380 L380,20 L20,20 Z'
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

const first = `art`
const last = `code`

class App extends React.Component {
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
      },
      info: {
        t1b: {
          title: 'World Metro Map',
          description:
            'We are always amazed by the vastness of the Universe and are excited by space exploration projects. Many of us even dreamt to be an astronaut during our childhood. To rekindle your curiosity about the Universe, we have picked a collection of splendid space, planet, galaxy and astronaut in space wallpapers in HD resolution suitable for both desktop and mobile.',
          color: '#FFFFFF',
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
    
    const layerNumber = 0
    
    return (
      <div className={`ac_modal_screen ${this.state.modal ? `active` : ``}`} onClick={this.handleToggle()}>
        <div className="ac_view_wrapper">
          <div className="ac_top_logo modal" style={{ marginRight: '12px', color: current.color }}>
            <h2 className="fatface">
              {first}
              <strong>{last}</strong>
            </h2>
            <div style={{ fontSize: '12px', marginLeft: '30px', opacity: '01.7' }}>/ Design / <strong>{current.title} </strong></div>
          
          </div>
          
          {/*<div className="ac_view_top_left">*/}
            {/*<h2> {current.title}</h2>*/}
          {/*</div>*/}
          <div className="ac_view_top_right" style={{ color: current.color }}>Close</div>
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
            {first} <span style={{opacity:'0.5'}}> + </span>{last}
          </h2>
        </div>
        <div className="ac_top_menu">
          <a role="link" onClick={() => this.parallax.scrollTo(1)}>
            <div className="menu_item idea">1. Idea</div>
          </a>
          <a role="link" onClick={() => this.parallax.scrollTo(2)}>
            <div className="menu_item design">2. Design</div>
          </a>
          <a role="link" onClick={() => this.parallax.scrollTo(3)}>
            <div className="menu_item dev">3. Code</div>
          </a>
        </div>
        
        <div className="ac_bottom_logo">
          {/*<div style={{color:'#CCC'}}>Contact:</div>*/}
          <div>gcid@artcodedata.com</div>
        </div>
        
        <Parallax ref={ref => (this.parallax = ref)} pages={5} onScroll={e => console.log(e)}>
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
  
  
          {/* PREAMBLE ///////////////////////// */}
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            
            <h1>Think Big</h1>
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
  
          
          
          {/* INTRO ///////////////////////// */}
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <p className="ac_initial">
              Welcome to art+code ,
              we help landing big <a href='#' className="ac_font_ide fatface" onClick={() => this.parallax.scrollTo(1)}>ideas</a> into well defined timelines and budgets.
              We <a href='#' className="ac_font_des fatface" onClick={() => this.parallax.scrollTo(2)}>design</a> the absolute best experience for your customer.
              We bring this idea to life <a href='#' className="ac_font_dev fatface" onClick={() => this.parallax.scrollTo(3)}>coding</a> and deploying it in the real world.</p>
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
          
          
          {/* IDEA ///////////////////////// */}
          
          
          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/mini_triangles2.png" className="ac_hide_mobile" style={{ width: '20%', marginLeft: '-20%', opacity:'0.5' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={1.2}
            speed={0.4}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/mini_triangles2.png" className="ac_hide_mobile" style={{ width: '55%', opacity:'0.7', marginLeft: '60%' }} alt="" />
          </ParallaxLayer>
          
          
          <ParallaxLayer offset={1.5} speed={0.2} style={{ opacity: 0.5 }}>
            <img src={url('t_out_red')} style={{ display: 'block', width: '10%', marginLeft: '20%' }} alt="" />
            <img src={url('t_out_red')} style={{ display: 'block', width: '5%', marginTop:'-19px', marginLeft: '29.5%',transform: 'rotate(180deg)'  }} alt="" />
          </ParallaxLayer>
          
          
          <ParallaxLayer offset={1.5} speed={0.2} style={{ opacity: 0.5 }}>
            <img src={url('t_out_red')} style={{ display: 'block', width: '5%', marginLeft: '10%' }} alt="" />
            <img src={url('t_out_red')} style={{ display: 'block', width: '15%', marginLeft: '71%',transform: 'rotate(180deg)'  }} alt="" />
          </ParallaxLayer>
          
          
          <ParallaxLayer
            offset={-1.25}
            speed={0.15}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src={url('t_out_red')}
              style={{ width: '30%', marginLeft: '20%', transform: 'rotate(180deg)' }}
              alt=""
            />
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="./images/t_big_idea.png" className="ac_hide_mobile" style={{ width: '50%', marginLeft: '10%' }} alt="" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            speed={0.25}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/t_big_idea_2.png" className="ac_big_triangle" style={{ width: '50%', marginLeft: '10%' }} alt="" />
          </ParallaxLayer>
          
          
          
          <ParallaxLayer offset={1.1} speed={0} style={{ opacity: 1 }}>
            <img src={url('t_out_red')} style={{ display: 'block', width: '10%', marginLeft: '60%' }} alt="" />
            <img src={url('t_out_red')} style={{ display: 'block', width: '15%', marginTop: '17%', marginLeft: '35%' }} alt="" />
            <img src={url('t_out_red')} style={{ display: 'block', width: '5%', marginLeft: '80%' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/mini_triangles1.png" className="ac_show_mobile" style={{ width: '60%', marginRight: '10%' }} alt="" />
          </ParallaxLayer>
  
          <ParallaxLayer className="ac_hide_mobile" offset={1.21} speed={-0.25}>
            <h3 className="ac_font_ide fatface" style={{ marginLeft: '13%', fontSize:'30px' }}>1.</h3>
          </ParallaxLayer>
          
          <ParallaxLayer offset={1.22} speed={-0.2} style={{ opacity: 1 }}>
            <h1 className="ac_title ac_font_ide" style={{ marginLeft: '13%' }}>
              idea
            </h1>
          </ParallaxLayer>
          
          <ParallaxLayer offset={1.4} speed={-0.1} style={{ opacity: 1 }}>
            <p className="ac_description" style={{ marginLeft: '14%' }}>
              ArtCode can help companies define the core purpose of an idea and define a clar path to make it happen. We not only define a realistic timeline and budget, but also help project managing it to to completion.
            </p>
          </ParallaxLayer>
          
          <ParallaxLayer offset={1.3} speed={0} style={{ opacity: 1 }}>
            <div className="ac_description" style={{ marginLeft: '70%' }}>
              <ul>
                <li>Digital Rebranding</li>
                <li>Experience Design</li>
                <li>Dashboards</li>
                <li>Marketplaces</li>
                <li>Communities</li>
                
              </ul>
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={1.2}
            speed={0}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', justifyContent: 'center' }}
          />
          
          {/* MARKERS */}
          <ParallaxLayer
            offset={-1.39}
            speed={0}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', justifyContent: 'left' }}
          >
            <img src={url('t_full_red')} style={{ width: '2%', marginLeft: '0%', transform: 'rotate(90deg)' }} alt="" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.65}
            speed={0}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', justifyContent: 'left' }}
          >
            <img
              src={url('t_full_green')}
              style={{ width: '2%', marginLeft: '0%', transform: 'rotate(90deg)' }}
              alt=""
            />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.65}
            speed={0}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', justifyContent: 'left' }}
          >
            <img
              src={url('t_full_orange')}
              style={{ width: '2%', marginLeft: '0%', transform: 'rotate(90deg)' }}
              alt=""
            />
          </ParallaxLayer>
          
          {/* DESIGN  ////////////////////// */}
  
          <ParallaxLayer
            offset={1.75}
            speed={0.6}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/t_full_red.svg" className="ac_hide_mobile ac_shadow_triangle" style={{ width: '3%', marginLeft: '-70%', opacity:'1', transform: 'rotate(-180deg)' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={1.95}
            speed={0.5}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/t_full_red.svg" className="ac_hide_mobile ac_shadow_triangle" style={{ width: '3%', marginLeft: '-70%', opacity:'1', transform: 'rotate(-180deg)' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={2.1}
            speed={0.5}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/t_full_green.svg" className="ac_hide_mobile ac_shadow_triangle" style={{ width: '15%', marginLeft: '5%' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/t_big_design.png" className="ac_hide_mobile ac_shadow_triangle" style={{ width: '50%', marginRight: '20%'}} alt="" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={0.25}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/t_big_design_2.png" className="ac_big_triangle ac_hide_mobile" style={{ width: '50%', marginRight: '20%' }} alt="" />
          </ParallaxLayer>
  
          <ParallaxLayer
            offset={2}
            speed={0.25}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img
              src={url('t_full_green')}
              className="ac_blur_triangle ac_show_mobile"
              alt=""
              style={{ transform: 'rotate(90deg)' }}
            />
          </ParallaxLayer>
          
          <ParallaxLayer offset={2.5} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('t_full_green')} style={{ width: '15%', marginLeft: '90%',transform: 'rotate(-90deg)' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={2} speed={0.8} style={{ opacity: 0.5 }}>
            <img src={url('t_out_green')} className="ac_shadow_triangle" style={{ display: 'block', width: '20%', marginLeft: '55%' }} alt="" />
            <img src={url('t_out_blue')} className="ac_shadow_triangle" style={{ display: 'block', width: '10%', marginLeft: '15%' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={2.2} speed={0.2} style={{ opacity: 0.7 }}>
            <img src={url('t_out_green')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} alt="" />
            <img src={url('t_out_green')} style={{ display: 'block', width: '15%', marginLeft: '50%', transform: 'rotate(180deg)' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={2.4} speed={-0.1}>
            <div className="ac_description des">
              Our approach of design is greatly defined by research and experimentation. We believe that design is a perfect balance between creativity and functionality. We obsessively follow UX best practices and always have accessibility and ergonomy in mind.
  
              <div className="ac_hide_mobile" style={{fontSize:'0.7em',color:'#3b3b3b', marginTop:'20px'}}>
                {`<-- Click on thumbnails to explore portfolio`}
              </div>
              
            </div>
            
          </ParallaxLayer>
          <ParallaxLayer className="ac_hide_mobile" offset={2.2} speed={-0.2}>
            <h1 className="" style={{ marginLeft: '61%', color:'#bebe3a', fontSize:'30px' }}>2.</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2.2} speed={-0.1}>
            <h1 className="ac_title ac_font_des" style={{ marginLeft: '60%', color:'#bebe3a' }}>Design</h1>
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/t_full_green.svg" className="ac_hide_mobile ac_shadow_triangle" style={{ width: '20%', marginLeft: '-70%', opacity:'0.5' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={2.78} speed={0} >
            <div className="ac_stack">
  
              <h4>Design Stack</h4>
              
              <img src="/images/logos/logo_sketch.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_framer.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_invision.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_adobe.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_daz.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_pencil.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={2.4} className="ac_hide_mobile" speed={0.2} style={{ width: '150px', height: '150px', marginLeft: '10%' }}>
  
            {this.renderTriangle('t10', '/images/thumb_amelia.png','#FFF', 174, -90)}
            {this.renderTriangle('t1', '/images/thumb_realign.png','#FFF', 123, 0)}
            {/* 40,20 */}
            {this.renderTriangle('t2', '/images/thumb_darkbrain.png','#FFF', 225, 0)}
            {/* 30, -5  */}
            {this.renderTriangle('t3', '/images/thumb_hexa.png','#FFF', 70, 90)}
            {/* 16, -28 */}
            
            {this.renderTriangle('t4', '/images/thumb_tdb1.png','#FFF', 175, 90)}
            {/* 15,20 */}
            {this.renderTriangle('t5', '/images/thumb_lightbrain.png','#FFF', 275, 90)}
            {/* 5,-5 */}
            {this.renderTriangle('t6', '/images/thumb_omakase.png','#FFF', 18, 180)}
            {/* -8, -28 */}
            
            {this.renderTriangle('t7', '/images/thumb_ameliaMix.png','#FFF', 122, 180)}
            {this.renderTriangle('t8', '/images/thumb_3dbrain.png','#FFF', 224, 180)}
             {this.renderTriangle('t9','/images/thumb_1desk.png', '#FFF', 327, 180)}
           
          </ParallaxLayer>
          
          {/* DEVELOPMENT  ////////////////////// */}
  
  
          <ParallaxLayer
            offset={2.75}
            speed={0.6}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/t_full_orange.svg" className="ac_hide_mobile ac_shadow_triangle" style={{ width: '3%', marginLeft: '-70%', opacity:'1', transform: 'rotate(-180deg)' }} alt="" />
          </ParallaxLayer>
  
          <ParallaxLayer
            offset={2.95}
            speed={0.5}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <img src="/images/t_full_orange.svg" className="ac_hide_mobile ac_shadow_triangle" style={{ width: '3%', marginLeft: '-70%', opacity:'1', transform: 'rotate(-180deg)' }} alt="" />
          </ParallaxLayer>
          
          
          
          <ParallaxLayer offset={2.9} speed={0.4} style={{ opacity: 0.4 }}>
            <img src={url('t_out_orange')} style={{ display: 'block', width: '50%', marginLeft: '80%',transform: 'rotate(-90deg)' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer
            offset={3.07}
            speed={0.1}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}
          >
            <img src="/images/t_big_dev.png" className="ac_hide_mobile" style={{ width: '40%', marginRight: '10%' }} alt="" />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.07}
            speed={0.25}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}
          >
            <img src="/images/t_big_dev_2.png" className="ac_big_triangle" style={{ width: '40%', marginRight: '10%' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={3.2} speed={0.5} style={{ opacity: 0.4 }}>
            <img src={url('t_out_orange')} style={{ display: 'block', width: '18%', marginLeft: '14%',transform: 'rotate(90deg)' }} alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={3.3} speed={0.3} style={{ opacity: 0.5 }}>
            <img src={url('t_out_orange')} style={{ display: 'block', width: '10%', marginLeft: '5%',transform: 'rotate(-90deg)' }} alt="" />
          </ParallaxLayer>
          
          <ParallaxLayer offset={3.3} speed={0} style={{ marginLeft: '5%' }}>
            <p className="ac_description dev">
              <span style={{fontSize:'1.5em', color:'#838383'}} >
                <span className="fatface">art</span>+<span className="fatface">code </span>
              </span>
                
                team mirrors development techniques created by the best software companies in the world such as Agile Development and Continuous Integration. But overall, we are friendly IT that will always answer any question you might have.
            </p>
          </ParallaxLayer>
  
          <ParallaxLayer className="ac_hide_mobile" offset={3.16} speed={0.15} style={{ opacity: 1, fontSize:'8px'}}>
            <h1 className="ac_title ac_font_dev" style={{marginLeft:'42%'}}>3.</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={3.15} speed={0.2} style={{ opacity: 1 }}>
            <h1 className="ac_title ac_font_dev">Code</h1>
          </ParallaxLayer>
          
          
          <ParallaxLayer offset={3.68} speed={0.1} style={{ opacity: 1 }}>
            <div className="ac_stack">
              <h4>Development Stack</h4>
              
              <img src="/images/logos/logo_react.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_gql.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_html5.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_three.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_aws.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_cloud.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={3.82} speed={0.1} style={{ opacity: 1 }}>
            <div className="ac_stack">
              <img src="/images/logos/logo_apollo.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_atlassian.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_github.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_jest.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_webgl.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
              <img src="/images/logos/logo_webpack.png" style={{ width: '40px', marginLeft: '10px' }} alt="" />
            </div>
          </ParallaxLayer>
          
          
          {/*ABOUT ///////////////////////////////////*/}
          
          <ParallaxLayer
            offset={4.2}
            speed={0.3}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', justifyContent: 'center', opacity:'0.5' }}
          >
            <p>We have worked with</p>
          </ParallaxLayer>
          
          <ParallaxLayer offset={4.3} speed={0.2} >
            <div className="ac_customer_logos">
              
              <div>
                <img src="/images/logos/logo_columbia.png" style={{ marginLeft: '0' }} alt="" />
                <img src="/images/logos/logo_coca.png" alt="" />
              </div>
              <div>
                <img src="/images/logos/logo_directv.png" alt="" />
                <img src="/images/logos/logo_techstars.png" alt="" />
              </div>
            
            </div>
            <div className="ac_customer_logos">
              <div>
                <img src="/images/logos/logo_radical.png" style={{ marginLeft: '0' }} alt="" />
                <img src="/images/logos/logo_open.png" alt="" />
              </div>
              <div>
                <img src="/images/logos/logo_startup.png" alt="" />
                <img src="/images/logos/logo_factopia.png" alt="" />
              </div>
            
            </div>
          </ParallaxLayer>
          
          
          <ParallaxLayer
            offset={4.6}
            speed={1.2}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', justifyContent: 'center', opacity:'0.5' }}
          >
            <p>On the media</p>
          </ParallaxLayer>
          
          <ParallaxLayer offset={4.7} speed={0.8} >
            <div className="ac_customer_logos">
              <div>
                <img src="/images/logos/logo_wired_compact.png" className="media" style={{ marginLeft: '0' }} alt="" />
                <img src="/images/logos/logo_gizmodo_large.png" className="media" alt="" />
              </div>
              <div>
                <img src="/images/logos/logo_fast_large.png" className="media" alt="" />
                <img src="/images/logos/logo_tech_large.png" className="media" alt="" />
              </div>
              {/*<img src="/images/logos/logo_cool_compact.png" className="media" alt="" />*/}
            </div>
          </ParallaxLayer>
        
        
        </Parallax>
      
      
      
      
      </div>
    )
  }
  
  render() {
    return this.renderScroll()
  }
}

export default App


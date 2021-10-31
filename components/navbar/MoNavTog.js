import React from 'react'
import {motion} from 'framer-motion'
import styles from '../../styles/mobilenav.module.css'

const Path = (props) => {
    return(
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          {...props}
        />
    )
}

const MoNavTog = ({toggle, isOpen}) => {
    return (
        <div className={styles.toggleBtn} onClick={toggle}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                  animate={isOpen ? "open" : "closed"}
                  initial={false}
                  variants={{
                      closed: {d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 100%)" },
                      open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 100%)" }
                  }}
                  transition={{ duration:0.3 }}
                />
                <Path
                  d="M 2 9.423 L 20 9.423"
                  stroke="hsl(0, 0%, 100%)"
                  animate={isOpen ? "open" : "closed"}
                  initial={false}
                  variants={{
                      closed: {x:0},
                      open: { x:"50px" }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <Path
                  animate={isOpen ? "open" : "closed"}
                  initial={false}
                  variants={{
                      closed: {d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 100%)" },
                      open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 100%)" }
                  }}
                  transition={{ duration:0.3 }}
                />

            </svg>   
        </div>
    )
}

export default MoNavTog

import React, { Component } from 'react';
class Main extends Component {
    render() {
        return(
        <section 
            class="
                overflow-auto
                bg-gray-100 m-auto p-3 px-6 flex 
                justify-between
                flex-col
                m-auto
                max-w-screen-sm
                text-center
            "
        >
            <h1 class="text-2xl py-4">{this.props.Reacttitle}</h1>
            <p class="px-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex dolorum laudantium nesciunt, aspernatur accusamus sapiente nihil dolore veniam voluptas ea asperiores, qui ut reiciendis, modi nobis explicabo totam dolorem quod.
            </p>
            <div class="bg-white rounded-3xl mt-14 py-7">
                <h2 class="pt-6 text-xl">{this.props.Tailwind}</h2>
                <p class="py-10 text-left px-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique voluptates at voluptate dolore mollitia iste quaerat aliquid accusantium necessitatibus quae asperiores fugit unde blanditiis deserunt, quis, et libero dolor!
                </p>
                <button type="button" class="bg-indigo-100 rounded px-7 py-3">more</button>
            </div>
            
        </section>
        )
    }
}

export default Main;
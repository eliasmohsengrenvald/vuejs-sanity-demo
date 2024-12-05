import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Carousel from '../Carousel.vue'

describe('Carousel.vue', () => {
  const images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
  ]

  it('renders correctly', () => {
    const wrapper = mount(Carousel, {
      props: { images },
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders the correct number of images', () => {
    const wrapper = mount(Carousel, {
      props: { images },
    })
    const items = wrapper.findAll('.carousel-item')
    expect(items.length).toBe(images.length)
  })

  it('renders images with correct src and alt attributes', () => {
    const wrapper = mount(Carousel, {
      props: { images },
    })
    const imgs = wrapper.findAll('img')
    imgs.forEach((img, index) => {
      expect(img.attributes('src')).toBe(images[index].src)
      expect(img.attributes('alt')).toBe(images[index].alt)
    })
  })

  it('changes currentIndex over time', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Carousel, {
      props: { images },
    })

    expect(wrapper.vm.currentIndex).toBe(0)

    vi.advanceTimersByTime(4000)
    expect(wrapper.vm.currentIndex).toBe(1)

    vi.advanceTimersByTime(4000)
    expect(wrapper.vm.currentIndex).toBe(2)

    vi.advanceTimersByTime(4000)
    expect(wrapper.vm.currentIndex).toBe(0)

    vi.useRealTimers()
  })

  it('applies active class to the correct image', async () => {
    vi.useFakeTimers()
    const wrapper = mount(Carousel, {
      props: { images },
    })

    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.carousel-item')[0].classes()).toContain('active')

    vi.advanceTimersByTime(4000)
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.carousel-item')[1].classes()).toContain('active')

    vi.advanceTimersByTime(4000)
    await wrapper.vm.$nextTick()
    expect(wrapper.findAll('.carousel-item')[2].classes()).toContain('active')

    vi.useRealTimers()
  })
})

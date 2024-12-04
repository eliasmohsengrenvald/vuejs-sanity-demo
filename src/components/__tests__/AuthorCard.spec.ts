import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AuthorCard from '../AuthorCard.vue'

// Mock the createURL function
vi.mock('../../utils', () => ({
  createURL: vi.fn((avatar, width, height) => `mocked-url/${avatar}?w=${width}&h=${height}`),
}))

const author = {
  _id: '1',
  full_name: 'Elias',
  avatar: 'avatar.jpg',
  short_bio: 'This is a short bio of Elias.',
}

describe('AuthorCard.vue', () => {
  it('renders author card with correct data', () => {
    const wrapper = mount(AuthorCard, {
      props: { author },
    })

    expect(wrapper.find('[data-cy="Elias"]').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toContain('mocked-url/avatar.jpg?w=300&h=300')
    expect(wrapper.find('h3').text()).toBe('Elias')
    expect(wrapper.find('p').text()).toBe('This is a short bio of Elias.')
  })

  it('renders a readmore button with the right url', async () => {
    const wrapper = mount(AuthorCard, {
      props: { author },
    })

    const profileLink = wrapper.find('[data-cy="Elias-readmore"]')
    expect(profileLink.exists()).toBe(true)
    expect(profileLink.attributes('to')).toBe('/author/1')
  })
})

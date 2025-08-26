# Chakra UI Cards Documentation

This documentation covers the implementation and usage of the custom Card component built with Chakra UI v3, along with
comprehensive dashboard examples.

## Table of Contents

1. [Overview](#overview)
2. [Card Component API](#card-component-api)
3. [Component Structure](#component-structure)
4. [Variants](#variants)
5. [Usage Examples](#usage-examples)
6. [Dashboard Implementation](#dashboard-implementation)
7. [Best Practices](#best-practices)
8. [Troubleshooting](#troubleshooting)

## Overview

The Card component is a flexible, reusable UI component built on top of Chakra UI's Box component. It provides a clean
container for grouping related content and actions with consistent styling and responsive behavior.

### Key Features

- ✅ Three visual variants (outline, filled, elevated)
- ✅ Compositional API with Header, Body, and Footer
- ✅ TypeScript support with proper type definitions
- ✅ Responsive design out of the box
- ✅ Accessible by default (inherits from Chakra UI Box)
- ✅ Consistent with Chakra UI design tokens

## Card Component API

### Card Props

```typescript
interface CardProps extends BoxProps {
  variant?: "outline" | "filled" | "elevated";
}
```

| Prop       | Type                                  | Default     | Description                           |
|------------|---------------------------------------|-------------|---------------------------------------|
| `variant`  | `"outline" \| "filled" \| "elevated"` | `"outline"` | Visual style variant                  |
| `...props` | `BoxProps`                            | -           | All Chakra UI Box props are supported |

### Subcomponents

- **`CardHeader`** - Container for card title and actions
- **`CardBody`** - Main content area
- **`CardFooter`** - Container for actions and secondary content

All subcomponents accept `BoxProps` and can be styled accordingly.

## Component Structure

```
Card (Root container)
├── CardHeader (Optional)
├── CardBody (Main content)
└── CardFooter (Optional)
```

### File Structure

```
src/
├── components/
│   └── ui/
│       └── card.tsx          # Card component implementation
└── routes/
    └── _home/
        └── index.tsx     # Dashboard with card examples
```

## Variants

### 1. Outline (Default)

```tsx
<Card variant="outline">
  <CardBody>Clean, minimal border design</CardBody>
</Card>
```

**Styling:**

- Border: 1px solid border.default
- Background: bg.panel
- Best for: General content, forms, lists

### 2. Filled

```tsx
<Card variant="filled">
  <CardBody>Solid background for emphasis</CardBody>
</Card>
```

**Styling:**

- Background: bg.muted
- No border
- Best for: Secondary content, sidebars, widgets

### 3. Elevated

```tsx
<Card variant="elevated">
  <CardBody>Subtle shadow for depth</CardBody>
</Card>
```

**Styling:**

- Background: bg.panel
- Box shadow: lg
- Best for: Primary content, statistics, important information

## Usage Examples

### Basic Card

```tsx
import { Card, CardBody } from '../components/ui/card';

function BasicExample() {
  return (
    <Card>
      <CardBody>
        <Text>Simple card with default styling</Text>
      </CardBody>
    </Card>
  );
}
```

### Complete Card Structure

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '../components/ui/card';

function CompleteExample() {
  return (
    <Card variant="elevated">
      <CardHeader>
        <Heading size="md">Card Title</Heading>
      </CardHeader>
      <CardBody>
        <Text>Main content goes here</Text>
      </CardBody>
      <CardFooter>
        <Button colorScheme="blue">Primary Action</Button>
        <Button variant="ghost">Secondary</Button>
      </CardFooter>
    </Card>
  );
}
```

### Statistics Card

```tsx
function StatsCard({ title, value, change, icon, color }) {
  return (
    <Card variant="elevated">
      <CardBody>
        <HStack justify="space-between">
          <Box>
            <Text fontSize="sm" color="fg.muted" fontWeight="medium">
              {title}
            </Text>
            <Text fontSize="2xl" fontWeight="bold">
              {value}
            </Text>
            <HStack>
              <StatArrow type={change > 0 ? "increase" : "decrease"} />
              <Text fontSize="sm" color={change > 0 ? "green.500" : "red.500"}>
                {Math.abs(change)}%
              </Text>
            </HStack>
          </Box>
          <Box p={3} bg={`${color}.50`} borderRadius="lg">
            <Icon as={icon} boxSize={6} color={`${color}.500`} />
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
}
```

### Activity Feed Card

```tsx
function ActivityCard() {
  return (
    <Card variant="outline">
      <CardHeader>
        <HStack justify="space-between">
          <Heading size="md">Recent Activity</Heading>
          <Badge colorScheme="blue" variant="subtle">Live</Badge>
        </HStack>
      </CardHeader>
      <CardBody>
        <VStack spacing={4} align="stretch">
          {activities.map((activity) => (
            <HStack key={activity.id}>
              <Box p={2} bg={`${activity.color}.50`} borderRadius="md">
                <Icon as={activity.icon} color={`${activity.color}.500`} />
              </Box>
              <Box flex={1}>
                <Text fontWeight="medium">{activity.title}</Text>
                <Text fontSize="sm" color="fg.muted">{activity.description}</Text>
              </Box>
              <Text fontSize="xs" color="fg.muted">{activity.time}</Text>
            </HStack>
          ))}
        </VStack>
      </CardBody>
      <CardFooter>
        <Button variant="ghost" size="sm" width="full">
          View all activity
        </Button>
      </CardFooter>
    </Card>
  );
}
```

### Tabbed User Metrics Card

The tabbed metrics card provides an interactive way to display multiple related metrics in a compact space. This card
uses Chakra UI v3's Tabs component to organize user statistics.

```tsx
function TabbedUserMetricsCard() {
  return (
    <Card variant="elevated">
      <CardBody>
        <Tabs.Root defaultValue="total" variant="subtle" size="lg">
          <Tabs.List mb={3}>
            <Tabs.Trigger value="total">Total</Tabs.Trigger>
            <Tabs.Trigger value="active">Active</Tabs.Trigger>
            <Tabs.Trigger value="new">New</Tabs.Trigger>
          </Tabs.List>
          
          <Tabs.Content value="total">
            <VStack align="stretch" gap={2}>
              <Text fontSize="sm" color="fg.muted" fontWeight="medium">
                Total Users
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                2,543
              </Text>
              <HStack>
                <Icon as={FiArrowUp} color="green.500" boxSize={3} />
                <Text fontSize="sm" color="green.500">
                  +12.5% from last month
                </Text>
              </HStack>
            </VStack>
          </Tabs.Content>
          
          <Tabs.Content value="active">
            <VStack align="stretch" gap={2}>
              <Text fontSize="sm" color="fg.muted" fontWeight="medium">
                Active Users (30d)
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                1,987
              </Text>
              <HStack>
                <Icon as={FiArrowUp} color="green.500" boxSize={3} />
                <Text fontSize="sm" color="green.500">
                  +8.3% from last month
                </Text>
              </HStack>
            </VStack>
          </Tabs.Content>
          
          <Tabs.Content value="new">
            <VStack align="stretch" gap={2}>
              <Text fontSize="lg" color="fg.muted" fontWeight="medium">
                New Users (7d)
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                142
              </Text>
              <HStack>
                <Icon as={FiArrowDown} color="red.500" boxSize={3} />
                <Text fontSize="sm" color="red.500">
                  -5.2% from last week
                </Text>
              </HStack>
            </VStack>
          </Tabs.Content>
        </Tabs.Root>
      </CardBody>
    </Card>
  );
}
```

**Key Features:**

- Interactive tabs with Chakra UI v3 Tabs component
- Subtle tab variant with large size for better readability
- Three distinct metrics: Total, Active (30d), and New (7d) users
- Trend indicators using react-icons (FiArrowUp/FiArrowDown)
- Color-coded trends (green for positive, red for negative)
- Consistent spacing and typography

## Dashboard Implementation

The dashboard (`src/routes/_home/index.tsx`) showcases various card patterns:

### 1. Statistics Grid

Four metric cards displaying KPIs with interactive and static elements:

```tsx
<Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
  {/* Tabbed User Metrics Card */}
  <Card variant="elevated">
    <CardBody>
      <Tabs.Root defaultValue="total" variant="subtle" size="lg">
        {/* Tabs content */}
      </Tabs.Root>
    </CardBody>
  </Card>
  
  {/* Revenue Card */}
  <Card variant="elevated">
    <CardBody>
      <HStack justify="space-between">
        {/* Revenue metrics */}
      </HStack>
    </CardBody>
  </Card>
  
  {/* Orders and Growth Rate Cards */}
</Grid>
```

**Features:**

- Responsive grid layout (1 column on mobile, 2 on tablet, 4 on desktop)
- **First card**: Interactive tabbed user metrics with Total/Active/New users
- **Other cards**: Static metrics for Revenue ($45,231), Orders (1,234), and Growth Rate (15.3%)
- Color-coded icons with background styling
- Trend indicators using react-icons (FiArrowUp/FiArrowDown)
- Consistent elevation styling across all stats cards

### 2. Main Content Grid

Two-column layout with activity feed and quick actions:

```tsx
<Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
  {/* Activity Card */}
  <Card variant="outline">
    <CardHeader>
      <HStack justify="space-between">
        <Heading size="md">Recent Activity</Heading>
        <Badge colorScheme="blue" variant="subtle">Live</Badge>
      </HStack>
    </CardHeader>
    <CardBody>
      {/* Activity items */}
    </CardBody>
    <CardFooter>
      <Button variant="ghost" size="sm" width="full">
        View all activity
      </Button>
    </CardFooter>
  </Card>
  
  {/* Quick Actions Card */}
  <Card variant="filled">
    <CardHeader>
      <Heading size="md">Quick Actions</Heading>
    </CardHeader>
    <CardBody>
      {/* Action buttons */}
    </CardBody>
  </Card>
</Grid>
```

**Activity Feed Features:**

- Real-time activity display with "Live" badge
- Icon-based activity types (user, payment, order)
- Timestamps and descriptions
- Footer action for viewing all activities
- Outline variant for clean, organized appearance

**Quick Actions Features:**

- Vertical button stack for common actions
- Full-width buttons with icons
- Color-coded by priority (blue, green, gray)
- Filled variant for secondary emphasis
- Actions: Add New User, View Analytics, Settings

### 4. Tabbed User Metrics Card

Interactive card with tabs showing different user analytics:

- Total users with growth metrics
- Active users (30-day period)
- New users (7-day period)
- Smooth tab transitions with Chakra UI Tabs component

### 3. Additional Status Cards

Three-column grid layout showcasing operational metrics:

```tsx
<Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
  {/* System Status Card */}
  <Card variant="outline">
    <CardHeader>
      <Heading size="sm">System Status</Heading>
    </CardHeader>
    <CardBody>
      <VStack gap={3} align="stretch">
        <HStack justify="space-between">
          <Text fontSize="sm">API Status</Text>
          <Badge colorScheme="green" size="sm">Operational</Badge>
        </HStack>
        {/* More status items */}
      </VStack>
    </CardBody>
  </Card>
  
  {/* Performance Card */}
  <Card variant="elevated">
    <CardHeader>
      <Heading size="sm">Performance</Heading>
    </CardHeader>
    <CardBody>
      <VStack gap={3}>
        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">234ms</Text>
          <Text fontSize="xs" color="fg.muted">Response Time</Text>
        </Box>
      </VStack>
    </CardBody>
  </Card>
  
  {/* Storage Usage Card */}
  <Card variant="outline">
    <CardHeader>
      <Heading size="sm">Storage Usage</Heading>
    </CardHeader>
    <CardBody>
      <VStack gap={2}>
        <HStack justify="space-between" width="full">
          <Text fontSize="sm">Used</Text>
          <Text fontSize="sm" fontWeight="medium">45.2 GB</Text>
        </HStack>
        {/* Progress bar */}
      </VStack>
    </CardBody>
  </Card>
</Grid>
```

**System Status Card Features:**

- Service health monitoring (API, Database, Cache)
- Color-coded status badges (green for operational, yellow for warnings)
- Outline variant for minimal emphasis
- Small heading size for compact display

**Performance Card Features:**

- Response time metrics (234ms)
- Trend indicators with improvement data
- Elevated variant for visual prominence
- Centered text layout for metric focus

**Storage Usage Card Features:**

- Used vs. available storage display (45.2 GB / 54.8 GB)
- Visual progress bar showing 45.2% usage
- Clean data presentation with aligned values
- Outline variant matching system status card

## Best Practices

### 1. Responsive Design

Always use responsive props for grid layouts:

```tsx
// Good
<Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}>

// Avoid
<Grid templateColumns="repeat(4, 1fr)">
```

### 2. Consistent Spacing

Use Chakra UI spacing tokens:

```tsx
// Good
<VStack spacing={4}>
<Box p={6}>

// Avoid
<VStack spacing="16px">
<Box padding="24px">
```

### 3. Semantic Color Usage

Use semantic color tokens for consistency:

```tsx
// Good
<Text color="fg.muted">
<Box bg="bg.panel">

// Avoid
<Text color="gray.500">
<Box bg="white">
```

### 4. Accessibility

Always provide meaningful content:

```tsx
// Good
<Icon as={FiUser} boxSize={6} aria-label="User icon" />
<Button aria-label="View all activities">View all</Button>

// Consider accessibility for complex cards
<Card role="article" aria-labelledby="card-title">
  <CardHeader>
    <Heading id="card-title">Statistics</Heading>
  </CardHeader>
</Card>
```

### 5. Performance

For large lists of cards, consider virtualization:

```tsx
// For many cards, use React Window or similar
import { FixedSizeGrid as Grid } from 'react-window';
```

## Advanced Patterns

### 1. Loading States

```tsx
function LoadingCard() {
  return (
    <Card>
      <CardBody>
        <VStack spacing={3}>
          <Skeleton height="20px" />
          <Skeleton height="40px" />
          <Skeleton height="20px" width="60%" />
        </VStack>
      </CardBody>
    </Card>
  );
}
```

### 2. Interactive Cards

```tsx
function InteractiveCard({ onClick, isSelected }) {
  return (
    <Card
      variant={isSelected ? "elevated" : "outline"}
      cursor="pointer"
      onClick={onClick}
      _hover={{ transform: "translateY(-2px)", shadow: "lg" }}
      transition="all 0.2s"
    >
      <CardBody>
        {/* Card content */}
      </CardBody>
    </Card>
  );
}
```

### 3. Card with Menu

```tsx
function CardWithMenu() {
  return (
    <Card>
      <CardHeader>
        <HStack justify="space-between">
          <Heading size="md">Title</Heading>
          <Menu>
            <MenuButton as={IconButton} icon={<Icon as={FiMoreVertical} />} />
            <MenuList>
              <MenuItem>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </CardHeader>
      <CardBody>
        {/* Content */}
      </CardBody>
    </Card>
  );
}
```

## Troubleshooting

### Common Issues

1. **Cards not responsive**
    - Ensure parent container has proper responsive props
    - Check that Grid templateColumns uses responsive values

2. **Inconsistent spacing**
    - Use Chakra UI spacing tokens consistently
    - Avoid mixing px values with tokens

3. **Color not updating with theme**
    - Use semantic color tokens (fg.muted, bg.panel)
    - Avoid hardcoded color values

4. **TypeScript errors**
    - Ensure proper imports from @chakra-ui/react
    - Check that custom props extend BoxProps correctly

### Performance Considerations

1. **Many cards**: Consider virtualization for 100+ cards
2. **Complex content**: Memoize expensive calculations
3. **Images**: Use proper loading states and optimization

### Accessibility Checklist

- [ ] Meaningful heading structure
- [ ] Proper color contrast ratios
- [ ] Keyboard navigation support
- [ ] Screen reader friendly content
- [ ] ARIA labels where needed

## Migration Guide

### From Other UI Libraries

If migrating from other card implementations:

```tsx
// Material-UI Card
<Card>
  <CardContent>Content</CardContent>
</Card>

// Our implementation
<Card>
  <CardBody>Content</CardBody>
</Card>
```

### Upgrading

When updating the Card component:

1. Test all variants
2. Check responsive behavior
3. Verify color token usage
4. Update documentation examples

## Examples Repository

For more examples, check:

- Dashboard implementation: `src/routes/_home/index.tsx`
- Component source: `src/components/ui/card.tsx`
- Additional patterns in the component library

---

**Note:** This implementation uses Chakra UI v3. For different versions, some tokens and APIs may vary. Always refer to
the official Chakra UI documentation for the most current information.

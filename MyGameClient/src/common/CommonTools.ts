/**
     * 计算平面上两点之间的欧几里得距离（直线距离）
     * @param point1 第一个点 {x, y}
     * @param point2 第二个点 {x, y}
     * @returns 两点之间的距离
     */
export function euclideanDistance(
    point1: { x: number; y: number },
    point2: { x: number; y: number }
): number {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}